export const ButtonAutoPlay = ({ onClick }) => {
  return (
    <button className="btn-control btn-blue btn-auto" onClick={onClick}>
      <i />
    </button>
  );
};

export const ButtonRed = ({ item, onClick }) => {
  return (
    <button className="btn btn-control btn-red btn-hotline" onClick={()=>onClick(item.value)}>
      <span className="label">
        <span> RED </span>
        <span>{`X${item.ratio}`}</span>
      </span>
    </button>
  );
};

export const ButtonHot = ({ item, onClick }) => {
  return (
    <button
      className="btn btn-control btn-yellow btn-hotline btn-hotline_hot max-1 w-full" onClick={()=>onClick(item.value)}
    >
      <span className="label">
        <span>
          <img src="./assets/logos/icon-hot.svg" />
        </span>
        <span>{`X${item.ratio}`}</span>
      </span>
    </button>
  );
};

export const ButtonBlack = ({ item, onClick }) => {
  return (
    <button className="btn btn-control btn-black btn-hotline" onClick={()=>onClick(item.value)}>
      <span className="label">
        <span> BLACK </span>
        <span> {`X${item.ratio}`} </span>
      </span>
    </button>
  );
};

export const ButtonMinus = ({ disabled, onClick }) => {
  return (
    <button
      disabled={disabled}
      className="btn-game prev mx-1"
      onClick={onClick}
      style={{ backgroundColor: disabled && "gray" }}
    />
  );
};
export const ButtonPlus = ({ disabled, onClick }) => {
  return (
    <button
      disabled={disabled}
      className="btn-game next mx-1"
      onClick={onClick}
      style={{ backgroundColor: disabled && "gray" }}
    />
  );
};

export const ButtonCoin = ({ disabled, onClick }) => {
  return (
    <button
      disabled={disabled}
      className="btn-game coin mx-1"
      onClick={onClick}
      style={{ backgroundColor: disabled && "gray" }}
    />
  );
};
