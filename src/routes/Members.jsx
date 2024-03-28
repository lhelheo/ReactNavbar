const Members = () => {
  // Dúvida sobre alinhamento my-auto e space-y-4
  const items = [
    {
      id: 1,
      imgSrc: "src/assets/img/profile1.png",
      title: "Título 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 2,
      imgSrc: "src/assets/img/profile2.png",
      title: "Título 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui offic.",
    },
    {
      id: 3,
      imgSrc: "src/assets/img/profile3.png",
      title: "Título 3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui offic.",
    },
  ];

  return (
    <section className="flex flex-col items-center p-4">
      {items.map((item) => (
        
        <div key={item.id} className="flex items-center space-x-4">
          
          <img src={item.imgSrc} alt="" className="w-24 h-24 object-cover rounded-md" />
          
          <div className="max-w-md">
            <h3 className="text-lg font-semibold text-blue-500">{item.title}</h3>
            <p>{item.text}</p>
          </div>
          
        </div>

      ))}
    </section>
  );
};

export default Members;