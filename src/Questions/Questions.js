import { Select } from "../Select/Select";
import { useInfo } from "../Context/Info";

import Selected from "../Assets/selected.svg";
import Unselected from "../Assets/unselected.svg";
import "./Questions.scss";

const Questions = () => {
  const {
    hasDisease,
    changeHasDisease,
    handicapped,
    changeHandicapped,
    age,
    changeAge,
    occupation,
    changeOccupation,
    decideGroup,
    ageOptions,
    occupationOptions,
  } = useInfo();
  return (
    <div className="questions">
      <div className="first-line">
        <Select
          options={occupationOptions}
          value={occupation}
          setValue={changeOccupation}
          firstValue={<option>Meslek Grubu</option>}
        />
        <Select
          options={ageOptions}
          value={age}
          setValue={changeAge}
          firstValue={<option>Yaş Grubu</option>}
        />
      </div>
      <div className="second-line">
        <p>Kronik hastalığınız var mı?</p>
        {hasDisease ? (
          <img
            src={Selected}
            alt="Selected Checkbox"
            onClick={() => changeHasDisease(false)}
          />
        ) : (
          <img
            src={Unselected}
            alt="Unselected Checkbox"
            onClick={() => changeHasDisease(true)}
          />
        )}
      </div>
      <button className="cta" onClick={decideGroup}>
        Hesapla
      </button>
    </div>
  );
};

export { Questions };
