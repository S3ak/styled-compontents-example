export default function CookiesBanner() {
  return (
    <div className="modal__content">
      <div className="modal__box">
        <div>
          <div className="content-tabs" id="t-cookies">
            <div className="content-tabs__item active" id="cookies-info">
              <div className="m-cookies">
                <p className="text-large">
                  <h2>Cookies Policy</h2>
                </p>

                <div className="text-medium">
                  <p>
                    We use our own cookies, as well as those of third parties,
                    for individual as well as repeated sessions, in order to
                    make the navigation of our website easy and safe for our
                    users.
                  </p>
                  <p>
                    In turn, we use cookies to measure and obtain statistical
                    data about the navigation of the users. You can configure
                    and accept the use of the cookies, and modify your consent
                    options, at any time. You can read more information about
                    our.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="m-cookies__bottom" id="button-default">
            <div>
              <span className="button button--medium--rounded--extra-pad">
                Accept Cookies
              </span>
            </div>
            <div>
              <strong className="link-underlined">Manage Settings</strong>
            </div>
          </div>

          <div className="m-cookies__bottom is-hidden" id="button-manage">
            <div>
              <span className="button button--medium--rounded--extra-pad">
                Accept Cookies
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
