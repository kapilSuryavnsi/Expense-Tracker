export default (states, action) => {
  switch (action.type) {
    case "Add-transition":
      return {
        ...states,
        transitions: [action.payload, ...states.transitions]
      };
    case "Delete-transition":
      return {
        ...states,
        transitions: states.transitions.filter(
          (transition) => transition.id !== action.payload
        )
      };
    default:
      return states;
  }
};
