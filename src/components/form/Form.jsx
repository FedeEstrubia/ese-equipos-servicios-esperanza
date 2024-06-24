export default function Form() {
  return (
    <div className="div-form-container">
      <div className="div-form-sup">
        <input type="text" className="input-small-1" placeholder="Su nombre"/>
        <input type="text" className="input-small-1" placeholder="Su email"/>
      </div>
      <div className="div-form-inf">
        <input type="text" className="input-small-2" placeholder="Establecimiento"/>
        <input type="text" className="input-small-2" placeholder="Localidad"/>
      </div>
      <textarea type="text" className="input-message" placeholder="Deje su mensaje con gusto le responderemos!!"/>
    </div>
  );
}
