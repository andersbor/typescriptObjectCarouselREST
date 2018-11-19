import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index";

let uri: string = "http://jsonplaceholder.typicode.com/comments";

interface IComment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

let comments: IComment[] = []; // array filled in axios.get
let index: number = 0;

axios.get<IComment[]>(uri)
    .then(function (response: AxiosResponse<IComment[]>): void {
        comments = response.data;
        showComment();
    })
    .catch(function (error: AxiosError): void {
        console.log(JSON.stringify(error));
    });

function showComment(): void {
    let div1: HTMLDivElement = <HTMLDivElement>document.getElementById("div1");
    let div2: HTMLDivElement = <HTMLDivElement>document.getElementById("div2");
    let div3: HTMLDivElement = <HTMLDivElement>document.getElementById("div3");
    let div4: HTMLDivElement = <HTMLDivElement>document.getElementById("div4");
    let div5: HTMLDivElement = <HTMLDivElement>document.getElementById("div5");
    div1.innerHTML = "id: " + comments[index].id + " postId: " + comments[index].postId;
    div3.innerHTML = "email: " + comments[index].email;
    div4.innerHTML = "name: " + comments[index].name;
    div5.innerHTML = comments[index].body;
}

let nextButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("nextButton");
nextButton.addEventListener("click", nextButtonClicked);

function nextButtonClicked(): void {
    index++;
    if (index === comments.length) { index = 0; }
    showComment();
}

let prevButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("prevButton");
prevButton.addEventListener("click", prevButtonClicked);

function prevButtonClicked(): void {
    index--;
    if (index === -1) { index = comments.length - 1; }
    showComment();
}