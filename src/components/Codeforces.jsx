import React, { useState, useEffect } from "react";
import "../styles/Codeforces.css";
import codeforces from "../assets/images/codeforces.svg";

const CodeforcesAPI = "https://codeforces.com/api/";
const username = "jwacker";

const GeneralProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(
          `${CodeforcesAPI}user.info?handles=${username}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProfile(data.result[0]);
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
          <img src={profile.titlePhoto} alt="Avatar" className="avatar" />
          <h2>{profile.firstName + " " + profile.lastName}</h2>
          <p>Username: {profile.handle}</p>
          <p>
            Rating: {profile.rating + " ("}
            <span className={profile.rank}>{profile.rank}</span>
            {")"}
          </p>
          <p>
            Max Rating: {profile.maxRating + " ("}
            <span className={profile.maxRank}>{profile.maxRank}</span>
            {")"}
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
        const response = await fetch(
          `${CodeforcesAPI}user.rating?handle=${username}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setContestData(data.result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchContestData();
  }, []);

  if (loading) {
    return <div>Loading... Contest Stats</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  contestData.sort((a, b) => b.newRating - a.newRating);

  return (
    <div className="contest-stats">
      <h3>Contest Stats</h3>
      <p>Total contests: {contestData.length}</p>
      <p>Best rank: {contestData[0].rank}</p>
      <p>Best rating: {contestData[0].newRating}</p>
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
        const response = await fetch(
          `${CodeforcesAPI}user.status?handle=${username}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProblemData(data.result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProblemData();
  }, []);

  if (loading) {
    return <div>Loading... Problem Stats</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="problem-stats">
      <h3>Problem Stats</h3>
      <p>Total submissions: {problemData.length}</p>
      <p>
        Accepted submissions:{" "}
        {problemData.filter((p) => p.verdict === "OK").length}
      </p>
    </div>
  );
};

const Codeforces = () => {
  return (
    <div className="card stats-card">
      <div className="icon-text">
        <img src={codeforces} alt="Codeforces" className="icon" />
        <h3>Codeforces</h3>
      </div>

      <div className="stats-container">
        <GeneralProfile />
        <ContestStats />
        <ProblemStats />
      </div>
    </div>
  );
};

export default Codeforces;
