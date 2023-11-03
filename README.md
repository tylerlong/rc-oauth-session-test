# RingCentral OAuth session test

## generate two access tokens using same credentials

These two access tokens have **different** session IDs.

Which means, each token is a different session.


## Generate one token and refresh it

Refreshing the token doesn't change the session ID.
Which means, token refresh will not generate new session. Instead, it will make the existing session live longer.
