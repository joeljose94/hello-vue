const app = Vue.createApp({
    data() {
        return {
            showBooks: false,
            title: "Quiet: The Power of Introverts in a World That Can't Stop Talking",
            author: 'Susan Cain',
            rating: 8,
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/images/notw.jpg', isFav: true },
                { title: 'the way of kings', author: 'brandon sanderson', img: 'assets/images/wotk.jpg', isFav: true },
                { title: 'the final empire', author: 'brandon sanderson', img: 'assets/images/fe.jpg', isFav: false }
            ]
        }
    },
    methods: {
        increaseRating() {
            if (this.rating < 10) {
                this.rating++
            }
        },
        decreaseRating() {
            if (this.rating > 0) {
                this.rating--
            }
        },
        toggleBooks() {
            this.showBooks = !this.showBooks
        },
        changeFav(book) {
            book.isFav = !book.isFav
        }
    },
    computed: {
        favBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')