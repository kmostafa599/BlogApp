import React from 'react'

const Login = () => {
    if (newUser) {
        // signup
        signup(credentials.email, credentials.password);
      } else {
        if (reset) {
          // reset password
          resetPassword(credentials.email);
        } else {
          // signin
          signin(credentials.email, credentials.password, () =>
            history.push("/")
          );
        }
      }
    }
  return (
    <div className="login">
      <h1>Hi there!</h1>
      <h2>
        {reset ? "Reset password" : newUser ? "Create an account" : "Sign in"}
      </h2>
      {authMsg && <p className="auth-message">{authMsg}</p>}
      <form onSubmit={handleSubmit} noValidate>
        {/* Email */}
        <div className="input-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={credentials.email}
            placeholder="Your e-mail"
            onChange={handleChange}
            className={
              (errors.emailIsEmpty || errors.emailFormatInvalid) &&
              "input-error"
            }
          />
          {errors.emailIsEmpty && <small>{errors.emailIsEmpty}</small>}
          {errors.emailFormatInvalid && (
            <small>{errors.emailFormatInvalid}</small>
          )}
        </div>

        {/* PASSWORD */}
        {!reset && (
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              placeholder="Your password"
              onChange={handleChange}
              className={
                (errors.passIsStrong || errors.passIsEmpty) && "input-error"
              }
            />
            {errors.passIsStrong && <small>{errors.passIsStrong}</small>}
            {errors.passIsEmpty && <small>{errors.passIsEmpty}</small>}
          </div>
        )}

        {/* BUTTONS */}
        <div>
          <button type="submit" className="btn-login">
            {loading ? (
              <Spinner />
            ) : reset ? (
              "Reset password"
            ) : newUser ? (
              "Create account"
            ) : (
              "Sign in"
            )}
          </button>
          {!newUser && !reset && (
            <button onClick={() => SetReset(true)} className="btn-link">
              Forgot password?
            </button>
          )}
          {reset && (
            <button onClick={() => SetReset(false)} className="btn-link">
              Back to sign in
            </button>
          )}
        </div>
      </form>
      <footer className="login-footer">
        <p>
          {newUser ? "Already have an account?" : "Don't have an account yet?"}
        </p>
        <button
          onClick={() => {
            setNewUser(!newUser);
            if (reset) SetReset(false);
          }}
          className="btn-switch"
        >
          {newUser ? "Sign in" : "Create an account"}
        </button>
      </footer>
    </div>
  )
}

export default Login

