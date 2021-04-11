const graphs = [
  {
    id: 1,
    title: "Example Chart",
    bars: {
      column1: 5,
      column2: 10,
    },
    visible: true //toggle later to delete
  }
]

const Graphs = () => {
  return (
    <div>
      {graphs.map((graph) => <h3>{graph.title}</h3>)}
    </div>
  )
}

export default Graphs;
