const HomeDxFooter = () => {
  return (
    <>
      <div
        id="HomeDxFooter"
        className="d-flex mt-5 flex-wrap justify-content-center"
        style={{ width: "300px" }}
      >
        <p className="m-1">Informazioni</p>
        <p className="m-1">Accessibilità</p>
        <p className="m-1">Centro assistenza</p>
        <p className="m-1">Privacy e condizioni ▼</p>
        <p className="m-1">Opzioni per gli annunci pubblicitari</p>
        <p className="m-1">Publicità</p>
        <p className="m-1">Servizi alle aziende ▼</p>
        <p className="m-1">Scarica l'app LinkedIn</p>
        <p className="m-1">Altro</p>
        <span className="copy mb-4">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo.png"
            alt="logo"
            style={{ width: "75px" }}
            className="m-1"
          />
          LinkedIn Corporation © {new Date().getFullYear()}
        </span>
      </div>
    </>
  );
};

export default HomeDxFooter;
