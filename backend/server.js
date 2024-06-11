import app from "./app.js";

const PORT = process.env.PORT || 5000; // Ensure PORT has a default value if undefined
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
