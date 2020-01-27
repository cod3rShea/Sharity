import React from 'react'


export function Input(props) {
    return (
      <div className="form-group">
        <input className="form-control" {...props} />
      </div>
    );
} 

export function TextArea(props) {
    return (
        <div className="form-group">
        <textarea className="form-control" rows="4" {...props} />
        </div>
    );
}

export function Select(props) {
    return (
        <div className="form-group">
        <select className="form-control" {...props}>
            <option value="Storage Requirements">Storage Requirements</option>
            <option value="Frozen">Frozen</option>
            <option value="no">Refrigerator</option>
            <option value="no">Dry</option>
            <option value="no">Canned</option>
            <option value="no">Fresh Produce</option>
            <option value="no">Prepared Food</option>
        </select>
        </div>
    );
}

export function FormBtn(props) {
    return (
        <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
        {props.children}
        </button>
    );
}