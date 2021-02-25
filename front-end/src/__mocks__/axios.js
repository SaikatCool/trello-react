export default {
  post: jest.fn(() => Promise.resolve({
    "name": "Test",
    "id": "1234"
}))
};