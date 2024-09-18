import React from "react";
import photoi from "./Photos/mha.jpg"
function Demandlogo({ size = '59px' }) {
    return (
        <div style={{
            width: size,
            height: size,
            borderRadius: '50%', // Makes the div circular
            overflow: 'hidden', // Ensures the image does not overflow the circular boundary
        }}>
            <img 
                src={photoi}
                style={{
                    width: '100%', // Ensures the image fills the circular div
                    height: 'auto' // Maintains aspect ratio
                }}
                alt="Demandlogo"
            />
        </div>
    );
}

export default Demandlogo;