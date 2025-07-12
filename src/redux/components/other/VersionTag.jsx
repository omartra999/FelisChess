import React from "react";
import { Text } from "react-native";
import { connect } from "react-redux";

const VersionTag = ({ applicationState: {version, name} }) => {
    return (
       <Text>{`${name} (v${version})`}</Text>
    );
};

const mapStateToProps = (state) => ({
    applicationState: state.application
});

export default connect(mapStateToProps)(VersionTag);
