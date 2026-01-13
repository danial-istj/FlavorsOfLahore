const RestaurantAudio = () => {
  return (
    <>
      <h2>Listen to Our Restaurant Jingle</h2>
      <audio controls>
        <source src="/audios/jingle.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
};

export default RestaurantAudio;
