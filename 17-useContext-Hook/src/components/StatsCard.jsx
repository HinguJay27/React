const StatsCard = () => {

  const stats = [
    {
      title: "Projects",
      value: "05",
      icon: "🚀"
    },
    {
      title: "Skills",
      value: "04",
      icon: "💻"
    },
    {
      title: "Experience",
      value: "Fresher",
      icon: "⭐"
    }
  ];

  return (
    <div className="stats-container">

      {stats.map((item, index) => (

        <div className="stats-card" key={index}>
          <span>{item.icon}</span>
          <h2>{item.value}</h2>
          <p>{item.title}</p>
        </div>

      ))}

    </div>
  );
};

export default StatsCard;