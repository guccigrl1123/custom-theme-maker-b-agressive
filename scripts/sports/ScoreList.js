import { useScores } from "./ScoreProvider.js"
import { Score } from "./Score.js"

export const ScoreList = () => {
    const scores = useScores()
    return render(scores)
}

const render = scoreCollection => {
    return `
        <article class="container__panel scores">
            ${scoreCollection.map(score => Score(score)).join("")}
        </article>
    `
}


const eventHub = document.querySelector("#container")



eventHub.addEventListener("colorChosen", event => {
    const color = event.detail.color

    const contentTarget = document.querySelector(".scores")

    contentTarget.classList.remove("red", "purple", "green", "blue")
    contentTarget.classList.add(color)
})

eventHub.addEventListener("fontChosen", event => {
    const font = event.detail.font

    const contentTarget = document.querySelector(".scores")
    contentTarget.classList.remove("xsmall", "small", "large", "xlarge")
    contentTarget.classList.add(font)
})

eventHub.addEventListener("borderChosen", event => {
    const border = event.detail.border

    const contentTarget = document.querySelector(".scores")
    contentTarget.classList.remove("onepixel", "threepixels", "fivepixels")
    contentTarget.classList.add(border)
})