import React from "react";
import Icon from "@material-ui/core/Icon";
import Button from "./Button";
import { connect } from "react-redux";
import { addCard } from "./../actions/cardsActions";
import styled from "styled-components";
import Form from "./Form";
import{ OpenForm } from "./OpenForm";

class CardCreator extends React.PureComponent {
  state = {
    formOpen: false,
    text: ""
  };

  openForm = () => {
    this.setState({
      formOpen: true
    });
  };

  closeForm = e => {
    this.setState({
      formOpen: false
    });
  };

  handleInputChange = e => {
    this.setState({
      text: e.target.value
    });
  };

//   handleAddList = () => {
//     const { dispatch } = this.props;
//     const { text } = this.state;

//     if (text) {
//       this.setState({
//         text: ""
//       });
//       dispatch(addList(text));
//     }

//     return;
//   };

  handleAddCard = () => {
    const { dispatch } = this.props;
    const { text } = this.state;

    if (text) {
      this.setState({
        text: ""
      });
      dispatch(addCard(text, this.props.listID));
    }
  };

  renderOpenForm = () => {
    const buttonText = "Add another card";
    const buttonTextOpacity = 0.5;
    const buttonTextColor = "inherit";
    const buttonTextBackground = "inherit";

    const OpenFormButton = styled.div`
      display: flex;
      align-items: center;
      cursor: pointer;
      border-radius: 3px;
      height: 36px;
      margin-left: 8px;
      width: 240px;
      padding-left: 10px;
      padding-right: 10px;
      opacity: ${buttonTextOpacity};
      color: ${buttonTextColor};
      background-color: ${buttonTextBackground};
    `;

    return (
      <OpenFormButton onClick={this.openForm}>
        <Icon>add</Icon>
        <p style={{ flexShrink: 0 }}>{buttonText}</p>
      </OpenFormButton>
    );
  };

  render() {
    const { text } = this.state;
    const { list } = this.props;
    return this.state.formOpen ? (
      <Form
        text={text}
        onChange={this.handleInputChange}
        closeForm={this.closeForm}
      >
        <Button onClick={this.handleAddCard}>
          {"Add Card"}
        </Button>
      </Form>
    ) : (
      <OpenForm onClick={this.openForm}>
        {"Add another card"}
      </OpenForm>
    );
  }
}

export default connect()(CardCreator);
