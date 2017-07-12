<script type="text/babel">
    
    var HelloMessage = React.createClass({
        render: function(){
            return <h1>Hello React</h1>;
        }
    });
    ReactDOM.render(
        <HelloMessage />,
        document.getElementById("container")
    );

</script>