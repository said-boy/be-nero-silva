export const home = async (req, res) => {
  return res.status(200).json({
    data: {
      say: "hello",
    },
  });
};
