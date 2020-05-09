const React = require('react');

class Index extends React.Component{
    render() {
        const { toDos } = this.props;
        return(
            <body>
                <h1>Do To List</h1>
                <h3>
                    {toDos.length <= 0 ? `There is no To Dos yet!` : 
                        <ul>
                            {toDos.map((toDoItem, index)=>{
                                console.log(toDoItem.done)
                                return(
                                    <div>
                                        <li>
                                            {toDoItem.toDo} - {toDoItem.done === false ? toDoItem.done = 'Not Done' : toDoItem.done='Done'}
                                            <form action={`/list/${toDoItem._id}?_method=DELETE`} method="POST">
                                                <input type="submit" value="Delete"/>
                                            </form>
                                        </li>
                                    </div>
                                )
                            })}
                        </ul>
                } </h3> <hr/>
                <form action="/list/new" method="POST">
                {/* <form action="/list" method="POST"> */}
                    <input type="text" name="toDo"/>
                    <input type="hidden" name="done" value="false"/>
                    <input type="submit" name="" value="Submit"/>
                </form>
            </body>
        )
    }
}

module.exports = Index;