// theme.js
const colorScheme = {
  cyan: "#b1f6ff",
  yellow: "#ffce00",
  red: "#ff2f00",
  redSos: "#b60f0e",
  redALittleDarker: "#e12f00",
  redALittleMoreDarker: "#d72d00",
  beaconColor: "rgba(200, 200, 200, .9)",
  darkRed: "#9b1e00",
  darkerRed: "#7d1a00",
  green: "#58ff1b",
  swampGreen: "#9fb912",
  slightlyDarkerGreen: "#4ee119",
  darkerGreen: "#40b417",
  middleDarkYellow: "rgb(200, 165, 0)",
  darkerYellow: "#917900",
  darkerYellow2: "#554600",
  darkerYellowLighter: "#ffbf00", // Yes, I would be terrible at naming dress colors
  grey: "#2b2a29",
  grey2: "#181818",
  lighterGrey: "#51504f",
  greyTransparent: "rgba(43, 42, 41, 0.8)",
  greyBarelyTransparent: "rgba(43, 42, 41, 0.9)",
  greyAsIfBarelyTransparentButNot: "rgba(43, 42, 41, 1)",
  lightGrey: "#ccc",
  lightGreySosOff: "#aaa",
  lightGreyMap: "rgba(235, 235, 235, 1)",
  evenLighterGrey: "#eee",
  darkGrey: "#444",
  blue: "#003db0",
  facebook: "#4468B0",
  vk: "#4C77A6",
  gradientFrom: "#ffc100",
  gradientTo: "#ffbf00"
};

const styles = {
  colors: colorScheme,

  container: {
    flex: 1,
    justifyContent: "center"
  },
  header: {
    height: 45,
    zIndex: 2
  },
  headerContent: {
    height: 53,
    backgroundColor: "transparent",
    width: "100%",
    paddingTop: 0,
    paddingLeft: 5,
    paddingRight: 15,
    borderBottomColor: "transparent",
    elevation: 0,
    shadowOpacity: 0,
    position: "absolute",
    zIndex: 43,
    top: 3
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  mainFooterButton: {
    off: {
      backgroundColor: colorScheme.yellow
      // fontSize: 20,
    },
    on: {
      backgroundColor: colorScheme.swampGreen
    },
    sos: {
      // backgroundColor: colorScheme.red
      // fontSize: 20,
    },
    text: {
      off: {},
      on: {},
      sos: {}
    }
  },
  horizontalRow: {
    flexDirection: "row"
  },
  bgImage: {
    flex: 1,
    width: null,
    height: null
    // resizeMode: 'cover'
  },
  blackColor: {
    color: "#000"
  },
  yellowColor: {
    color: colorScheme.yellow
  },
  yellowBackground: {
    backgroundColor: colorScheme.yellow
  },
  row: {
    flexDirection: "row"
  },
  column: {
    flexDirection: "column"
  },
  footer: {
    width: "100%",
    height: 80,
    position: "absolute",
    bottom: 0,
    alignItems: "center"
  },
  footerContainer: {
    height: 50,
    width: "100%",
    marginTop: 20,
    backgroundColor: "rgba(0,0,0,0.8)"
  },
  fxCenter: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  center: {
    alignItems: "center",
    justifyContent: "center"
  },
  fxCenterV: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  darkInput: {
    backgroundColor: "#201f1f",
    color: "#fff",
    height: 40,
    borderColor: "gray",
    borderRadius: 30,
    display: "flex",
    borderWidth: 0,
    fontSize: 16,
    paddingLeft: 15,
    maxWidth: 300,
    paddingRight: 15,
    marginTop: 10,
    width: 270
  },
  darkInputAddMarker: {
    backgroundColor: "#201f1f",
    color: "#fff",
    borderColor: "gray",
    borderRadius: 20,
    display: "flex",
    borderWidth: 0,
    fontSize: 16,
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    height: 90,
    paddingTop: 10,
    flex: 1
  },
  searchIcon: {
    height: 16,
    width: 16,
    position: "absolute",
    top: 21
  },
  userProfileIcon: {
    height: 34,
    width: 55,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: "#ffd200",
    borderStyle: "solid",
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "center"
  },
  darkInputFilter: {
    backgroundColor: "#1f1f1d",
    color: "#fff",
    height: 40,
    borderColor: "transparent",
    borderRadius: 30,
    display: "flex",
    borderWidth: 0,
    fontSize: 16,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 10,
    flex: 1,
    marginLeft: 25,
    marginRight: 25
  },
  postInput: {
    backgroundColor: "#eee",
    color: "#000",
    height: 65,
    borderColor: "gray",
    borderRadius: 4,
    display: "flex",
    borderWidth: 0,
    fontSize: 16,
    paddingLeft: 15,
    paddingRight: 15,
    margin: 10,
    width: "100%",
    maxWidth: 600,
    flex: 1
  },
  markerInput: {
    backgroundColor: "#eee",
    color: "#000",
    height: 35,
    borderColor: "gray",
    borderRadius: 4,
    display: "flex",
    borderWidth: 0,
    fontSize: 16,
    paddingLeft: 15,
    paddingRight: 15,
    margin: 10,
    width: "100%",
    maxWidth: 600,
    flex: 1
  },
  bikeInput: {
    height: 37,
    backgroundColor: "#eee",
    color: "#000",
    borderColor: "gray",
    borderRadius: 4,
    display: "flex",
    borderWidth: 0,
    fontSize: 16,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 0,
    marginRight: 0,
    width: "100%",
    maxWidth: 600,
    flex: 1
  },
  bikeSelect: {
    backgroundColor: "transparent",
    height: 40,
    borderColor: "gray",
    borderBottomWidth: 0.75,
    borderBottomColor: "#efefef",
    display: "flex",
    borderWidth: 0,
    marginBottom: 10,
    width: "100%"
  },
  darkInputLikeView: {
    backgroundColor: "#201f1f",
    height: 40,
    borderColor: "gray",
    borderRadius: 30,
    display: "flex",
    marginLeft: 15,
    borderWidth: 0,
    maxWidth: 300,
    paddingRight: 15,
    marginTop: 10,
    width: 270
  },
  darkInputLikeViewText: {
    fontSize: 16,
    color: "#fff"
  },
  postStyle: {
    backgroundColor: "#fff",
    borderRadius: 0,
    maxWidth: 600
  },
  postStyleDark: {
    backgroundColor: "transparent",
    borderRadius: 0,
    maxWidth: 600
  },
  whiteCard: {
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    marginBottom: 40
  },
  whiteCardAvatar: {
    borderRadius: 70,
    width: 140,
    height: 140,
    zIndex: 999,
    top: 0,
    marginTop: 0
  },
  lightInput: {
    backgroundColor: "#e5e5e5",
    color: "#111",
    height: 40,
    borderColor: "gray",
    borderRadius: 10,
    display: "flex",
    borderWidth: 0,
    fontSize: 16,
    paddingLeft: 15,
    maxWidth: 300,
    paddingRight: 15,
    marginBottom: 10,
    width: 270
  },
  transparentField: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 40,
    backgroundColor: "transparent",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "#414141"
  },
  transparentInput: {
    backgroundColor: "transparent",
    color: "#fff",
    height: 40,
    borderColor: "gray",
    borderBottomWidth: 1,
    borderBottomColor: "#efefef",
    display: "flex",
    borderWidth: 0,
    fontSize: 16,
    marginBottom: 10,
    width: "100%"
  },
  settingsSubsectionTitle: {
    marginTop: 10,
    marginBottom: 15,
    textAlign: "center",
    color: "#fff",
    fontSize: 14,
    fontWeight: "300"
  },
  lightInputLabel: {
    fontSize: 13,
    marginBottom: 3
  },
  transparentInputSettingsLabel: {
    fontSize: 13,
    marginBottom: 3,
    fontWeight: "700",
    textAlign: "left",
    color: "#808080"
  },
  lightInputLabelOnGrey: {
    fontSize: 16,
    // marginBottom: 3,
    textAlign: "left",
    color: "#999"
  },
  sosButton: {
    backgroundColor: colorScheme.red,
    marginTop: 20,
    // maxWidth: 300,
    marginLeft: 40,
    marginRight: 40,
    height: 40,
    borderRadius: 30,
    // width: 270,
    justifyContent: "center",
    alignItems: "center"
  },
  redButtonSmall: {
    backgroundColor: colorScheme.red,
    margin: 7,
    marginBottom: 3,
    paddingLeft: 9,
    paddingRight: 9,
    height: 40,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  authButton: {
    backgroundColor: colorScheme.yellow,
    marginTop: 10,
    maxWidth: 300,
    height: 40,
    borderRadius: 30,
    width: 230,
    justifyContent: "center",
    alignItems: "center"
  },
  savePostButton: {
    backgroundColor: colorScheme.yellow,
    marginTop: 0,
    maxWidth: 200,
    height: 50,
    borderRadius: 400,
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  pairedButton: {
    marginBottom: 10,
    height: 95,
    borderWidth: 10,
    overflow: "hidden",
    borderColor: "#303030",
    width: 95,
    borderRadius: 60,
    margin: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  pairedButtonContent: {
    backgroundColor: colorScheme.yellow,
    height: 75,
    width: 75,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center"
  },
  authButtonText: {
    fontSize: 16,
    color: "#000"
  },
  postImgContainer: {
    borderWidth: 1,
    borderColor: "#f00"
  },
  postActionRed: {
    color: "#f00"
  },
  postActionRegular: {
    color: "#aaa"
  },
  tornHeaderFix: {
    paddingTop: 20
  },
  postHeader: {
    margin: 14,
    marginLeft: 21,
    marginRight: 21,
    marginBottom: 0,
    flexDirection: "row",
    flex: 1
  },
  postHeaderAvatar: {
    borderRadius: 16,
    width: 32,
    height: 32
  },
  singleAvatarProfile: {
    borderRadius: 70,
    width: 140,
    height: 140
  },
  singleAvatar: {
    borderRadius: 40,
    width: 80,
    height: 80,
    marginBottom: 15
  },
  commentAvatar: {
    marginTop: 4,
    borderRadius: 8,
    width: 16,
    height: 16
  },
  noteIcon: {
    backgroundColor: "rgba(253, 233, 16, 0.5)",
    width: "35%",
    height: "35%",
    padding: 6,
    paddingRight: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  attachmentImage: {
    margin: 10,
    borderRadius: 10
  },
  postHeaderUsername: {
    fontSize: 15,
    flex: 2,
    margin: 7
  },
  postText: {
    margin: 21,
    marginTop: 10,
    marginBottom: 5
    // textAlign: 'justify'
  },
  postTextDark: {
    margin: 21,
    marginTop: 18,
    marginBottom: 0
    // textAlign: 'justify'
  },
  postHeaderDate: {
    fontSize: 13,
    marginLeft: 7,
    marginTop: 7,
    paddingLeft: 10,
    color: "#999"
  },
  postActions: {
    marginTop: 3,
    marginBottom: 10,
    marginLeft: 21,
    marginRight: 21,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  postActionCount: {
    fontSize: 13,
    marginRight: 10,
    marginTop: 6
  },
  messageBubble: {
    backgroundColor: "#fff",
    margin: 4,
    marginLeft: 10,
    display: "flex",
    padding: 8,
    marginRight: 50,
    borderRadius: 10,
    borderBottomLeftRadius: 0
  },
  messageBubbleMine: {
    backgroundColor: colorScheme.cyan,
    margin: 4,
    marginRight: 10,
    display: "flex",
    padding: 8,
    marginLeft: 50,
    borderRadius: 10,
    borderBottomRightRadius: 0
  },

  unreadCount: {
    backgroundColor: colorScheme.yellow,
    width: 16,
    height: 16,
    borderRadius: 8,
    left: 17,
    bottom: 3,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center"
  },

  onlineCircle: {
    position: "absolute",
    zIndex: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colorScheme.yellow,
    borderColor: colorScheme.yellow,
    borderWidth: 1
  },
  onlineCircleLarge: {
    width: 15,
    height: 15,
    marginLeft: -10,
    marginTop: -5,
    borderRadius: 12
  },
  onlineCircleSmall: {
    width: 10,
    height: 10,
    marginLeft: -5,
    marginTop: -5,
    borderRadius: 8
  },

  onlineBikeCircle: {
    backgroundColor: colorScheme.swampGreen,
    borderColor: colorScheme.swampGreen,
    borderWidth: 1,
    borderRadius: 100
  },

  unreadCountRed: {
    backgroundColor: colorScheme.red,
    width: 16,
    height: 16,
    borderRadius: 8,
    left: 17,
    bottom: 3,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center"
  },

  unreadCountBig: {
    backgroundColor: colorScheme.yellow,
    width: 24,
    height: 24,
    borderRadius: 12,
    right: 4,
    top: 3,
    zIndex: 9,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center"
  },

  orangeCircleCount: {
    paddingTop: 20,
    borderWidth: 1,
    borderColor: colorScheme.yellow,
    borderRadius: 30,
    width: 60,
    color: "#fff",
    textAlign: "center",
    marginLeft: 7,
    fontSize: 15,
    fontWeight: "bold",
    height: 60
  },

  orangeCircleCountLoading: {
    paddingTop: 0,
    borderWidth: 1,
    borderColor: colorScheme.yellow,
    borderRadius: 30,
    width: 60,
    marginLeft: 7,
    height: 60
  },

  orangeCircleCountText: {
    color: "#b4b4b4",
    fontSize: 12,
    width: 75,
    textAlign: "center",
    paddingTop: 5
  },

  userListStyle: {
    marginBottom: 20,
    backgroundColor: "transparent"
  },

  bikeScrollView: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    marginRight: 15,
    marginLeft: 15
  },

  bikeFormLabelStyle: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%"
  },

  arrow: {
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 0,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 0,
    width: 10,
    height: 10,
    top: 4
  },
  oneDigitInput: {
    borderColor: "#404040",
    color: "#fff",
    textAlign: "center",
    borderRadius: 15
  },
  arrowDown: {
    transform: [{ rotate: "45deg" }]
  },
  arrowRight: {
    transform: [{ rotate: "-45deg" }]
  },
  mapStyle: [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#212121"
        }
      ]
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575"
        }
      ]
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#212121"
        }
      ]
    },
    {
      featureType: "administrative",
      elementType: "geometry",
      stylers: [
        {
          color: "#757575"
        }
      ]
    },
    {
      featureType: "administrative.country",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e"
        }
      ]
    },
    {
      featureType: "administrative.land_parcel",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#bdbdbd"
        }
      ]
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575"
        }
      ]
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#181818"
        }
      ]
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#616161"
        }
      ]
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1b1b1b"
        }
      ]
    },
    {
      featureType: "road",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#2c2c2c"
        }
      ]
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#8a8a8a"
        }
      ]
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          color: "#373737"
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#3c3c3c"
        }
      ]
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "geometry",
      stylers: [
        {
          color: "#4e4e4e"
        }
      ]
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#616161"
        }
      ]
    },
    {
      featureType: "transit",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575"
        }
      ]
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000"
        }
      ]
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#3d3d3d"
        }
      ]
    }
  ]
};

export default styles;
