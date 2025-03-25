import React from 'react';
import './css/footer.css';

const Copyright = () => {
  return (
    <div className="copyright">
      <p className="py-3 text-center sub-footer">
        Design by{' '}
        <a
          href="https://langtech.vn"
          title="Langtech.vn"
          className="text-white fw-bold"
        >
          Katec.vn
        </a>
      </p>{' '}
    </div>
  );
};

export default Copyright;
