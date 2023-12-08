import React from 'react';

function Footer() {
    return (
        <footer style={{ textAlign: 'center', padding: '20px', marginTop: '30px', backgroundColor: '#f0f0f0' }}>
          <p>&copy; {new Date().getFullYear()} LutherCookBook. All rights reserved.</p>
          <p>Contact us: <a href="mailto:contact@example.com">roman@luther.edu</a></p>
          <p><a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-use">Terms of Use</a></p>
        </footer>
      );
    }

export default Footer;

