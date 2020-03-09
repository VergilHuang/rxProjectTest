import RX from 'reactxp';

const HomeStyle = {
    main: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    }),

    title: RX.Styles.createTextStyle({
        fontWeight: 'bold',
        fontSize: 36,
        textAlign: 'center',
    }),

    label: RX.Styles.createTextStyle({
        marginTop: 10,
        textAlign: 'center',
        fontSize: 16,
    }),

    name: RX.Styles.createTextStyle({
        fontWeight: 'bold',
        fontSize: 36,
        color: '#42B74F',
    }),

    links: RX.Styles.createViewStyle({
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    }),

    link: RX.Styles.createLinkStyle({
        marginRight: 5,
        marginLeft: 5,
        color: '#0070E0',
    }),
};

export default HomeStyle