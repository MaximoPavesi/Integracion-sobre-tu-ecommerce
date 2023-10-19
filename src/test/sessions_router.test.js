const SessionsRouter = require('./sessions_router');

describe('SessionsRouter', () => {
  test('should create a session', () => {
    const sessionsRouter = new SessionsRouter();
    const sessionId = sessionsRouter.createSession('user123');
    expect(Object.keys(sessionsRouter.sessions).length).toBe(1);
    expect(sessionsRouter.sessions[sessionId]).toBe('user123');
  });
});