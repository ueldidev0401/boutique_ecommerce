export const customStyles = {
    option: (provided, state) => ({
        ...provided,
        fontSize: 14,
        color: state.isSelected ? "#fff" : "#474747",
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
        cursor: "pointer",
        borderBottom: "1px solid #ebebeb",
        backgroundColor: state.isSelected ? "#ff7004" : state.isFocused ? "#F9FAFB" : "#ffffff",
    }),
    control: (provided, state) => ({
        display: "flex",
        alignItems: "center",
        minHeight: 45,
        backgroundColor: "#ffffff",
        borderRadius: 3,
        border: "1px solid #D1D5DB",
        borderColor: state.isFocused ? "#ff7004" : "#ebebeb"
    }),
    indicatorSeparator: () => ({
        display: "none",
    }),
    menu: (provided, _) => ({
        ...provided,
        borderRadius: 3,
        border: "none",
        marginTop: 5,
        fontSize: 13,
        paddingBottom: 0,
        zIndex: 99
    }),
    menuList: (provided, _) => ({
        ...provided,
        paddingTop: 0,
        paddingBottom: 0
    }),
    valueContainer: (provided, _) => ({
        ...provided,
        paddingLeft: 16,
    }),
    singleValue: (provided, _) => ({
        ...provided,
        fontSize: 14,
        color: "#191919",
    }),
};