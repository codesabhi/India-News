// console.log("welcome to news project using news api.")

// grab the apikey
let apiToken = 'ad012bf2e7a6afbfa8820fbdd86865d0'


// grab the news container
let newsAccordion = document.getElementById("newsAccordion");

// create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://gnews.io/api/v4/top-headlines?&token=${apiToken}&lang=en`, true);

// what to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);

        let newsHtml = " ";

        articles.forEach(function (element, index) {

            let news = `<div class="card ">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                    <button class="btn btn-link collapsed btn-block text-left" type="button" data-toggle="collapse"
                                        data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}"><b style = "color:grey"><em>Breaking News${index + 1}:</em></b>
                                        ${element["title"]}
                                    </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse " aria-labelledby="heading${index}"
                                data-parent="#newsAccordion">
                                <div class="card-body">
                                    ${element["description"]}.<a href = "${element['url']}" target = "_blank"> Read more here</a>
                                </div>
                            </div>
                        </div>`;
            newsHtml += news;

        });
        newsAccordion.innerHTML = newsHtml;

    }
    else {
        console.log("some error occured.")
    }
}

xhr.send()





