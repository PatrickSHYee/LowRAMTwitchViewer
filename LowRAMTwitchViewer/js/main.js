// Your code here!
window.onload = function () {
    var streamer = "";
    var theme = "dark";

    document.getElementById("streamer").value = streamer;

    document.getElementById("go").onclick = function () {
        switchChannel();
    };

    document.getElementById("dark").onclick = function () {
        if (theme !== "dark") {
            remove();
            theme = "dark";
            CreateTwitch();
        }
    };

    document.getElementById("light").onclick = function () {
        if (theme !== "light") {
            remove();
            theme = "light";
            CreateTwitch();
        }
    };

    function switchChannel() {
        // Removes the element from the page
        if (streamer !== "") {
            remove();
        }
        streamer = document.getElementById("streamer").value;
        CreateTwitch();
    }

    function remove() {
        var parent = document.getElementById("tViewer");
        var child = document.getElementById("twitch-embed");

        parent.removeChild(child);
    }

    function CreateTwitch() {
        // Creates a span for the twitch-embed
        var view = document.createElement("span");
        view.setAttribute("id", "twitch-embed");

        // Adds the span to the tViewer
        document.getElementById("tViewer").appendChild(view);

        new Twitch.Embed("twitch-embed", {
            width: "100%",
            height: "100%",
            channel: streamer,
            theme: theme
        });
    };
};
