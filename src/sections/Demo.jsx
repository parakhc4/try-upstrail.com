import { useState } from 'react';
import Blueprint from '../components/Blueprint';

const WEB3FORMS_ACCESS_KEY = '4c57de63-6faa-4aac-b552-41ae5259a976';
const WEB3FORMS_URL = 'https://api.web3forms.com/submit';
const GOOGLE_SHEET_URL =
  'https://script.google.com/macros/s/AKfycbwRiafpYdJ2bqziphk2UMJ5VU4GH56I6GrLtvnBz_w2Jr_gUDVPZHN1XmQ44gLUIBFtyQ/exec';

const PROMISES = [
  'Nothing to install and no data needed for the first call',
  'We will say so if your ERP already does enough',
  'A reply within one working day',
];

export default function Demo() {
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.target);
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);

    try {
      // Log to the sheet without blocking the visible result.
      fetch(GOOGLE_SHEET_URL, { method: 'POST', mode: 'no-cors', body: formData })
        .catch((err) => console.error('Sheet log failed:', err));

      const response = await fetch(WEB3FORMS_URL, { method: 'POST', body: formData });

      if (response.ok) {
        setStatus('success');
      } else {
        console.error('Web3Forms Error:', await response.json());
        setStatus('error');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
    }
  };

  return (
    <section id="demo" className="u-section-dark">
      <div className="u-shell u-band">
        <div className="u-demo-grid">
          <div>
            <h2 className="u-h2-xl">See the plan<br />for your plant</h2>
            <p className="u-demo-copy">
              Thirty minutes, on the planning problem rather than the plumbing. We will walk you
              through the model for your vertical, the constraints it solves against, and the three
              or four decisions it would change in your plant next week. Then we will tell you
              honestly whether it is worth doing.
            </p>
            <div className="u-demo-list">
              {PROMISES.map((line) => (
                <div className="u-list-item" key={line}>
                  <span className="u-plus" aria-hidden="true">+</span>{line}
                </div>
              ))}
            </div>
          </div>

          <Blueprint tone="dark" className="u-form">
            <div className="u-plate-label">Request a demo</div>

            {status === 'success' ? (
              <div className="u-form-done">
                <h3 className="u-form-done-title">Request received</h3>
                <p className="u-form-done-copy">
                  Thank you. We will read it properly and come back to you within one working day,
                  with the model for your vertical rather than a slide deck.
                </p>
              </div>
            ) : (
              <form className="u-form-fields" onSubmit={handleSubmit}>
                <input type="hidden" name="subject" value="New Demo Request from Upstrail.com" />
                <input type="hidden" name="from_name" value="Upstrail Website" />

                <div className="field">
                  <label htmlFor="demo-name">Name / Company</label>
                  <input
                    id="demo-name"
                    className="input"
                    type="text"
                    name="name"
                    required
                    placeholder="Rohit Garg · Bharat Precision Pvt Ltd"
                  />
                </div>

                <div className="field">
                  <label htmlFor="demo-email">Work email</label>
                  <input
                    id="demo-email"
                    className="input"
                    type="email"
                    name="email"
                    required
                    placeholder="rohit@company.com"
                  />
                </div>

                <div className="field">
                  <label htmlFor="demo-erp">Which ERP are you on?</label>
                  <input
                    id="demo-erp"
                    className="input"
                    type="text"
                    name="erp"
                    placeholder="Dynamics · Zoho · Odoo · in-house"
                  />
                </div>

                <div className="field">
                  <label htmlFor="demo-message">What breaks today?</label>
                  <textarea
                    id="demo-message"
                    className="input"
                    name="message"
                    rows="3"
                    required
                    placeholder="Our schedule is rebuilt in Excel every Monday and it still misses..."
                  />
                </div>

                <Blueprint
                  as="button"
                  tone="dark"
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn btn-invert btn-block"
                  style={{ padding: 12, fontSize: 15 }}
                >
                  {status === 'submitting' ? 'Sending…' : 'Request a demo'}
                </Blueprint>

                {status === 'error' && (
                  <p className="u-form-error" role="alert">
                    That did not go through. Try again, or write to us directly.
                  </p>
                )}
              </form>
            )}
          </Blueprint>
        </div>
      </div>
    </section>
  );
}
