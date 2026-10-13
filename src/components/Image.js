import React from 'react';

function Image() {
    return (
        <div>
            <img 
                src="https://infoportal.kiev.ua/wp-content/uploads/2013/02/%D0%9F%D0%B0%D0%BD%D0%BE%D1%80%D0%B0%D0%BC%D0%B0-%D0%9A%D0%B8%D0%B5%D0%B2%D0%BE-%D0%9F%D0%B5%D1%87%D0%B5%D1%80%D1%81%D0%BA%D0%BE%D0%B9-%D0%BB%D0%B0%D0%B2%D1%80%D1%8B.jpg" 
                alt="Панорама міста Київ" 
                width="600" 
                style={{ maxWidth: "100%", height: "auto", display: "block", margin: "20px 0" }}
            />
        </div>
    );
}

export default Image;