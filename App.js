import React, { useState } from "react";
import { StatusBar, setStatusBarBackgroundColor } from "expo-status-bar";
import {
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
export default function App() {
  const [pressable, setPressable] = useState(false);

  const handlePressIn = () => {
    setPressable(true);
  };
  const handlePressOut = () => {
    setPressable(false);
  };
  const people = [
    {
      id: 0,
      name: "All",
    },
    {
      id: 1,
      name: "Man",
    },
    {
      id: 2,
      name: "Women",
    },
    {
      id: 3,
      name: "Dress",
    },
    {
      id: 4,
      name: "Menus",
    },
    {
      id: 5,
      name: "Relations",
    },
    {
      id: 6,
      name: "OLDERS",
    },
    {
      id: 7,
      name: "Siblings",
    },
    {
      id: 8,
      name: "GRAND",
    },
    {
      id: 9,
      name: "DADYS",
    },
    {
      id: 10,
      name: "Mum",
    },
  ];

  const shop = [
    {
      name: "#2Best Sellers",
      const: "$10.3",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.H7kLKGE2pMSG9bTg1SSd4QHaE8&pid=Api&P=0&h=220",
      description: "customers",
    },
    {
      name: "#3Nike",
      const: "$18.3",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.Aupj8F40r1MzMtsdMiXgPgHaE8&pid=Api&P=0&h=220",
      description: "3Nike",
    },
    {
      name: "#4Best Seller",
      const: "$10.3",
      image:
        "https://img0.junaroad.com/uiproducts/16544822/zoom_0-1567168565.jpg",
      description: "customers",
    },
    {
      name: "#5Adidas",
      const: "$19.3",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.H7kLKGE2pMSG9bTg1SSd4QHaE8&pid=Api&P=0&h=220",
      description: "shoes",
    },
    {
      name: "#6Barenciga",
      const: "$30.3",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.Aupj8F40r1MzMtsdMiXgPgHaE8&pid=Api&P=0&h=220",
      description: "shoes",
    },
    {
      name: "#7Valezi",
      const: "$30.3",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.H7kLKGE2pMSG9bTg1SSd4QHaE8&pid=Api&P=0&h=220",
      description: "that ",
    },
    {
      name: "#8jordan",
      const: "$12.3",
      image:
        "https://th.bing.com/th/id/R.76217ef74dd844103a1fda775f2a5fe8?rik=VveEtmsPh4OxGA&riu=http%3a%2f%2fwww.fashionnova.com%2fcdn%2fshop%2fproducts%2f04-13-23Studio6_KF_CM_11-59-41_32_CR60342_Black_21313_MP_1200x1200.jpg%3fv%3d1681771946&ehk=cojzjNrXLr7R05siMbAcLqUYefLU1pVjcbGFmckHAXE%3d&risl=&pid=ImgRaw&r=0",
      description: "shoes",
    },
    {
      name: "#9Sweet shirts",
      const: "$14.3",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.Dsol-HeUwrlsiX2G_9-IjQHaE8&pid=Api&P=0&h=220",
      description: "sweet",
    },
    {
      name: "#10Charity",
      const: "$23.3",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.Aupj8F40r1MzMtsdMiXgPgHaE8&pid=Api&P=0&h=220",
      description: "clothes",
    },
  ];
  return (
    <View
      style={{ height: height, width: width, flex: 1, backgroundColor: "#FFFFFF" }}
    >
      <View style={{ height: 50 }}></View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          margin: 10,
          height: 50,
          borderRadius: 50,
        }}
      >
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 25, // Half of the width and height to create a circle
            backgroundColor: "#E8E8E8", // Color of the circle
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign name="arrowleft" size={24} color="black" style={{}} />
        </View>
        <Text style={{ fontWeight: "500", fontSize: 20 }}>Search</Text>
        <Entypo name="sound-mix" size={24} color="black" />
      </View>
      <View style={{ margin: 10 }}>
        <TextInput
          theme={{
            colors: { primary: "white" },
            
          }}
          textColor="black"
          placeholder="Search..."
          placeholderTextColor="black"
          right={<TextInput.Icon icon="eye" />}
          left={<EvilIcons name="search" size={23} color="black" />}
          style={{
            borderRadius: 25,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            height: 60,
            backgroundColor:"whitesmoke"            
          }}
          underlineColor="transparent"
          
        />
      </View>
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={people}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
              underlayColor="transparent"
              style={{
                backgroundColor: pressable ? "#C59D5A" : "#FFFFFF",
                margin: 10,
                borderRadius: 20,
                justifyContent: "center",
                borderWidth: 1,
                borderColor: "black",
                paddingHorizontal: 20, // Add horizontal padding for text
                paddingVertical: 10, // Add vertical padding for text
              }}
            >
              <Text style={{ color: pressable ? "white" : "black" }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <ScrollView>
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={shop}
            keyExtractor={(item) => item.name.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  width: 240,
                  height: 140,
                  margin: 10,
                  borderRadius: 20,
                  justifyContent: "center",
                  borderWidth: 1,
                  borderColor: "black",
                  position: "relative", // Set position to relative
                }}
              >
                <ImageBackground
                  source={{ uri: item.image }}
                  style={{
                    width: 240,
                    height: 140,
                    borderRadius: 20,
                    overflow: "hidden",
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <View
                      style={{
                        position: "absolute",
                        top: 10,
                        left: 12,
                        backgroundColor: "#C29A64",
                        width: 80,
                        height: 30,
                        borderRadius: 20,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ color: "white" }}>{item.description}</Text>
                    </View>
                    <View
                      style={{
                        backgroundColor: "#a9a9a9",
                        flexDirection: "row",
                        height: 45,
                        width: 240,
                        position: "absolute",
                        justifyContent: "space-between",
                        alignItems: "center",
                        bottom: 0,
                        paddingHorizontal: 20,
                        borderBottomRightRadius: 20,
                        borderBottomLeftRadius: 20,
                      }}
                    >
                      <Text style={{ color: "white" }}> {item.name}</Text>
                      <Text style={{ color: "white" }}>{item.const}</Text>
                    </View>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            )}
          />
        </View>

        <View>
          <Text style={{ fontWeight: "500", fontSize: 25, margin: 20 }}>
            ProductResult (43)
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 30,
              flexWrap: "wrap",
              backgroundColor: "#FFFFFF",
              margin: 10,
              paddingTop: 10,
              height: height,
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <View>
              <View style={{ borderRadius: 10, overflow: "hidden" }}>
                <ImageBackground
                  source={{
                    uri: "https://th.bing.com/th/id/R.76217ef74dd844103a1fda775f2a5fe8?rik=VveEtmsPh4OxGA&riu=http%3a%2f%2fwww.fashionnova.com%2fcdn%2fshop%2fproducts%2f04-13-23Studio6_KF_CM_11-59-41_32_CR60342_Black_21313_MP_1200x1200.jpg%3fv%3d1681771946&ehk=cojzjNrXLr7R05siMbAcLqUYefLU1pVjcbGFmckHAXE%3d&risl=&pid=ImgRaw&r=0",
                  }}
                  style={{ width: 150, height: 200, position: "relative" }}
                >
                  <View
                    style={{
                      position: "absolute",
                      left: 100,
                      top: 10,
                      width: 40,
                      height: 40,
                      borderRadius: 25,
                      backgroundColor: "white",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <AntDesign name="hearto" size={24} color="black" />
                  </View>
                </ImageBackground>
              </View>
              <View>
                <Text>white T-shirt</Text>
                <Text style={{ fontWeight: "500" }}>$45</Text>
              </View>
            </View>
            <View>
              <View style={{ borderRadius: 10, overflow: "hidden" }}>
                <ImageBackground
                  source={{
                    uri: "data:image/jpeg;base64,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",
                  }}
                  style={{ width: 150, height: 200, position: "relative" }}
                >
                  <View
                    style={{
                      position: "absolute",
                      left: 100,
                      top: 10,
                      width: 40,
                      height: 40,
                      borderRadius: 25,
                      backgroundColor: "white",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <AntDesign name="hearto" size={24} color="black" />
                  </View>
                </ImageBackground>
              </View>
              <View>
                <Text>Purple T-shirt</Text>
                <Text style={{ fontWeight: "500" }}>$47</Text>
              </View>
            </View>
            <View>
              <View style={{ borderRadius: 10, overflow: "hidden" }}>
                <ImageBackground
                  source={{
                    uri: "https://i.pinimg.com/736x/28/2c/3f/282c3f99ac594dff027fd38781a8a71a.jpg",
                  }}
                  style={{ width: 150, height: 200, position: "relative" }}
                >
                  <View
                    style={{
                      position: "absolute",
                      left: 100,
                      top: 10,
                      width: 40,
                      height: 40,
                      borderRadius: 25,
                      backgroundColor: "white",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <AntDesign name="hearto" size={24} color="black" />
                  </View>
                </ImageBackground>
              </View>
              <View>
                <Text>blue T-shirt</Text>
                <Text style={{ fontWeight: "500" }}>$48</Text>
              </View>
            </View>
            <View>
              <View style={{ borderRadius: 10, overflow: "hidden" }}>
                <ImageBackground
                  source={{
                    uri: "https://img0.junaroad.com/uiproducts/16544822/zoom_0-1567168565.jpg",
                  }}
                  style={{ width: 150, height: 200, position: "relative" }}
                >
                  <View
                    style={{
                      position: "absolute",
                      left: 100,
                      top: 10,
                      width: 40,
                      height: 40,
                      borderRadius: 25,
                      backgroundColor: "white",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <AntDesign name="hearto" size={24} color="black" />
                  </View>
                </ImageBackground>
              </View>
              <View>
                <Text>green T-shirt</Text>
                <Text style={{ fontWeight: "500" }}>$49</Text>
              </View>
            </View>
            <View>
              <View style={{ borderRadius: 10, overflow: "hidden" }}>
                <ImageBackground
                  source={{uri:'https://th.bing.com/th/id/R.76217ef74dd844103a1fda775f2a5fe8?rik=VveEtmsPh4OxGA&riu=http%3a%2f%2fwww.fashionnova.com%2fcdn%2fshop%2fproducts%2f04-13-23Studio6_KF_CM_11-59-41_32_CR60342_Black_21313_MP_1200x1200.jpg%3fv%3d1681771946&ehk=cojzjNrXLr7R05siMbAcLqUYefLU1pVjcbGFmckHAXE%3d&risl=&pid=ImgRaw&r=0'}}
                  style={{ width: 150, height: 200, position: "relative" }}
                >
                  <View
                    style={{
                      position: "absolute",
                      left: 100,
                      top: 10,
                      width: 40,
                      height: 40,
                      borderRadius: 25,
                      backgroundColor: "white",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <AntDesign name="hearto" size={24} color="black" />
                  </View>
                </ImageBackground>
              </View>
              <View>
                <Text>green T-shirt</Text>
                <Text style={{ fontWeight: "500" }}>$49</Text>
              </View>
            </View>
            <View>
              <View style={{ borderRadius: 10, overflow: "hidden" }}>
                <ImageBackground
                  source={{
                    uri: "data:image/jpeg;base64,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",
                  }}
                  style={{ width: 150, height: 200, position: "relative" }}
                >
                  <View
                    style={{
                      position: "absolute",
                      left: 100,
                      top: 10,
                      width: 40,
                      height: 40,
                      borderRadius: 25,
                      backgroundColor: "white",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <AntDesign name="hearto" size={24} color="black" />
                  </View>
                </ImageBackground>
              </View>
              <View>
                <Text>green T-shirt</Text>
                <Text style={{ fontWeight: "500" }}>$49</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
