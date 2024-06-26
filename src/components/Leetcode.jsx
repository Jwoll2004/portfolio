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
          <p>Username: {profile.username}</p>
          <p>Ranking: {profile.ranking}</p>
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
    <div className="contest-stats">
      <h3 className="outline-link">Contest Stats</h3>
      <p>Total contests attended: {contestData.contestAttend}</p>
      {/* rounded off rating */}
      <p>Rating: {Math.round(contestData.contestRating)}</p>
      <p>
        Global Rank: {contestData.contestGlobalRanking} /{" "}
        {contestData.totalParticipants}
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
    <div className="problem-stats">
      <h3 className="outline-link">Problem Stats</h3>
      <p>Total problems solved: {problemData.solvedProblem}</p>
      <p>Easy: {problemData.easySolved}</p>
      <p>Medium: {problemData.mediumSolved}</p>
      <p>Hard: {problemData.hardSolved}</p>
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
    </div>
  );
};

export default Leetcode;
