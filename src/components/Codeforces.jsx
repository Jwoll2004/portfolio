import React, { useState, useEffect } from "react";
import "../styles/Codeforces.css";
import codeforces from "../assets/images/codeforces.svg";

const CodeforcesAPI = "https://codeforces.com/api/";
const username = "jwacker";

const Codeforces = () => {
  const [profileData, setProfileData] = useState(null);
  const [contestData, setContestData] = useState(null);
  const [problemData, setProblemData] = useState(null);
  const [recentContestData, setRecentContestData] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch profile data
        const profileResponse = await fetch(
          `${CodeforcesAPI}user.info?handles=${username}`
        );
        if (!profileResponse.ok) {
          throw new Error("Network response was not ok");
        }
        const profileResult = await profileResponse.json();
        setProfileData(profileResult.result[0]);

        // Fetch contest data
        const contestResponse = await fetch(
          `${CodeforcesAPI}user.rating?handle=${username}`
        );
        if (!contestResponse.ok) {
          throw new Error("Network response was not ok");
        }
        const contestResult = await contestResponse.json();
        setRecentContestData(contestResult.result.reverse().slice().slice(0, 3) || []);  
        setContestData(
          contestResult.result.sort((a, b) => b.newRating - a.newRating)
        );

        // Fetch problem data
        const problemResponse = await fetch(
          `${CodeforcesAPI}user.status?handle=${username}`
        );
        if (!problemResponse.ok) {
          throw new Error("Network response was not ok");
        }
        const problemResult = await problemResponse.json();
        setProblemData(problemResult.result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading... Profile</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const uniqueProblemsSolved = new Set(
    problemData
      .filter((p) => p.verdict === "OK")
      .map((p) => p.problem.contestId + p.problem.index)
  ).size;

  const acceptedSubmissions = problemData
    .filter((p) => p.verdict === "OK")
    .map(
      (p) => new Date(p.creationTimeSeconds * 1000).toISOString().split("T")[0]
    );

  const uniqueDates = [...new Set(acceptedSubmissions)].sort(
    (a, b) => new Date(a) - new Date(b)
  );

  let maxStreak = 1;
  let currentStreak = 1;

  for (let i = 1; i < uniqueDates.length; i++) {
    const prevDate = new Date(uniqueDates[i - 1]);
    const currDate = new Date(uniqueDates[i]);
    const diffInDays = (currDate - prevDate) / (1000 * 60 * 60 * 24);

    if (diffInDays <= 2) {
      currentStreak++;
    } else {
      maxStreak = Math.max(maxStreak, currentStreak);
      currentStreak = 1;
    }
  }
  maxStreak = Math.max(maxStreak, currentStreak);

  const recentContests = recentContestData || [];

  return (
    <div className="card stats-card">
      <div className="icon-text">
        <img src={codeforces} alt="Codeforces" className="icon" />
        <h3>Codeforces</h3>
      </div>

      <div className="stats-container">
        <div className="avatar-name">
          {profileData && (
            <>
              <img
                src={profileData.titlePhoto}
                alt="Avatar"
                className="avatar"
              />
              <h2>{profileData.firstName + " " + profileData.lastName}</h2>
              <p>
                Username:{" "}
                <span className="stat-data">{profileData.handle}</span>
              </p>
              <p>
                Rating:{" "}
                <span className="stat-data">
                  {profileData.rating}
                  <span className={profileData.rank}>
                    {" (" + profileData.rank + ")"}
                  </span>
                </span>
              </p>
              <p>
                Max Rating:{" "}
                <span className="stat-data">
                  {profileData.maxRating}
                  <span className={profileData.maxRank}>
                    {" (" + profileData.maxRank + ")"}
                  </span>
                </span>
              </p>
            </>
          )}
        </div>

        <div className="stats">
          <h3 className="outline-link">Contest Stats</h3>
          <p>
            Total contests:{" "}
            <span className="stat-data">{contestData.length}</span>
          </p>
          <p>
            Best rank: <span className="stat-data">{contestData[0].rank}</span>
          </p>
          <p>
            Best rating:{" "}
            <span className="stat-data">{contestData[0].newRating}</span>
          </p>
        </div>

        <div className="stats">
          <h3 className="outline-link">Problem Stats</h3>
          <p>
            Problems solved:{" "}
            <span className="stat-data">{uniqueProblemsSolved}</span>
          </p>
          <p>
            Max Streak: <span className="stat-data">{maxStreak}</span>
          </p>
        </div>
      </div>
        <div className="recent-contests">
          <h3 className="outline-link">Recent Contests</h3>
          {recentContests.length === 0 ? (
            <p>No recent contests found.</p>
          ) : (
            recentContests.map((contest) => (
              <div key={contest.contestId} className="contest">
                <p className="bold-text">{contest.contestName}</p>

                <div className="contest-details">
                  <p>
                    Date:{" "}
                    <span className="stat-data">
                      {new Date(contest.ratingUpdateTimeSeconds * 1000)
                        .toISOString()
                        .split("T")[0]}
                    </span>
                  </p>
                  <p>
                    Rank:{" "}
                    <span className="stat-data">{contest.rank}</span>
                  </p>
                  <p>
                    New Rating:{" "}
                    <span className="stat-data">{contest.newRating}</span>
                  </p>
                </div>
              </div>
            ))
          )
          }
        </div>
    </div>
  );
};

export default Codeforces;
