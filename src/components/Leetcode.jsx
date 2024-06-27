import React, { useState, useEffect } from "react";
import "../styles/Leetcode.css";
import leetcode from "../assets/images/leetcode.svg";

const LeetAPI = "https://alfa-leetcode-api.onrender.com/";
const username = "jwacker19";

const GeneralProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`${LeetAPI}${username}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <div>Loading... Profile</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="avatar-name">
      {profile && (
        <>
          <img src={profile.avatar} alt="Avatar" className="avatar" />
          <h2>{profile.name}</h2>
          <p>
            Username: <span className="stat-data">{profile.username}</span>
          </p>
          <p>
            Ranking: <span className="stat-data">{profile.ranking}</span>
          </p>
        </>
      )}
    </div>
  );
};

const ContestStats = () => {
  const [contestData, setContestData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContestData = async () => {
      try {
        const response = await fetch(`${LeetAPI}${username}/contest`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setContestData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchContestData();
  }, []);

  if (loading) {
    return <div>Loading Contest Data...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="stats">
      <h3 className="outline-link">Contest Stats</h3>
      <p>
        Total contests attended:{" "}
        <span className="stat-data">{contestData.contestAttend}</span>
      </p>
      <p>
        Rating:{" "}
        <span className="stat-data">
          {Math.round(contestData.contestRating)}
        </span>
      </p>
      <p>
        Global Rank:{" "}
        <span className="stat-data">
          {contestData.contestGlobalRanking} / {contestData.totalParticipants}
        </span>
      </p>
    </div>
  );
};

const ProblemStats = () => {
  const [problemData, setProblemData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProblemData = async () => {
      try {
        const response = await fetch(`${LeetAPI}${username}/solved`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProblemData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProblemData();
  }, []);

  if (loading) {
    return <div>Loading Problem Data...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="stats">
      <h3 className="outline-link">Problem Stats</h3>
      <p>
        Total problems solved:{" "}
        <span className="stat-data">{problemData.solvedProblem}</span>
      </p>
      <p>
        Easy: <span className="stat-data">{problemData.easySolved}</span>
      </p>
      <p>
        Medium: <span className="stat-data">{problemData.mediumSolved}</span>
      </p>
      <p>
        Hard: <span className="stat-data">{problemData.hardSolved}</span>
      </p>
    </div>
  );
};

const RecentContests = () => {
  const [contestData, setContestData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContestData = async () => {
      try {
        const response = await fetch(`${LeetAPI}${username}/contest`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setContestData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchContestData();
  }, []);

  if (loading) {
    return <div>Loading Recent Contests...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // sort contests by date newest to oldest
  const recentContests = contestData?.contestParticipation?.slice().reverse().slice(0, 3) || [];


  return (
    <div className="recent-contests">
      <h3 className="outline-link">Recent Contests</h3>
      {recentContests.length === 0 ? (
        <p>No recent contests found.</p>
      ) : (
        recentContests.map((contest) => (
          <div key={contest.contest.title} className="contest">
            <p className="bold-text">{contest.contest.title}</p>

            <div className="contest-details">
              <p>
                Date:{" "}
                <span className="stat-data">
                  {new Date(contest.contest.startTime*1000).toISOString().split("T")[0]}
                </span>
              </p>
              <p>
                Rank:{" "}
                <span className="stat-data">Math.round({contest.ranking})</span>
              </p>
              <p>
                Rating:{" "}
                <span className="stat-data">{Math.round(contest.rating)}</span>
              </p>
              <p>
                Problems Solved:{" "}
                <span className="stat-data">
                  {" "}
                  {contest.problemsSolved} / {contest.totalProblems}
                </span>
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

const Leetcode = () => {
  return (
    <div className="card stat-card">
      <div className="icon-text">
        <img src={leetcode} alt="Leetcode" className="icon" />
        <h3>Leetcode</h3>
      </div>

      <div className="stats-container">
        <GeneralProfile />
        <ContestStats />
        <ProblemStats />
      </div>
        
      <RecentContests />
    </div>
  );
};

export default Leetcode;
