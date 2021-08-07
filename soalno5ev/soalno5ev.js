fetch("https://www.google.com/url?q=https://jsonplaceholder.typicode.com/photos&sa=D&source=editors&ust=1628305769831135&usg=AFQjCNHivhlaJGqcGkBmjYvCCA9y0uQVtA")
.then((res) => res.json())
.then((res) => {
    console.log(
        data.map((value, index) => {
            console.log(
                `$(index + 1). ${value.title} dan complate ${value.completed}`
            );
        })
    );
})
.catch((err) => console.log(err));
}
buat_data();