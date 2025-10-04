import { Ionicons } from '@expo/vector-icons';
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BottomNavbar from "../../components/BottomNavbar";

import { router } from 'expo-router';
import avatar from '../../assets/images/avatar/1.png';
import movie_1 from '../../assets/images/movies/1.png';
import movie_2 from '../../assets/images/movies/2.png';
import recently_1 from '../../assets/images/recently/1.png';
import recently_2 from '../../assets/images/recently/2.png';
import series_1 from '../../assets/images/series/1.png';
import series_2 from '../../assets/images/series/2.png';
import series_3 from '../../assets/images/series/3.png';

const Home = () => {
  const RECENTLY_PLAYED_DATA = [
    { id: 'r1', title: 'Harry Potter', subtitle: 'The Goblet of Fire', image: recently_1, icon: 'heart' },
    { id: 'r2', title: 'The Boys', subtitle: 'Season 3, Episode 2', image: recently_2, icon: 'heart' },
    { id: 'r3', title: 'Harry Potter', subtitle: 'Lorem dolor', image: recently_1, icon: 'heart' },
  ];

  const TRENDING_MOVIES_DATA = [
    { id: 't1', title: 'Inside Out 2', image: movie_1 },
    { id: 't2', title: 'Garfield', image: movie_2 },
    { id: 't3', title: 'Harry Potter', image: recently_1 },
  ];

  const TOP_TV_SERIES_DATA = [
    { id: 's1', title: 'Top Series 1', image: series_1 },
    { id: 's2', title: 'Top Series 2', image: series_2 },
    { id: 's3', title: 'Top Series 3', image: series_3 },
  ];

  const renderSection = (title, data, bigItems) => {
    const getItemStyle = () => {
      if (title === 'Recently Played') return { ...sectionStyles.recentlyPlayedCard, width: 160 };
      if (bigItems) return { ...sectionStyles.trendingMovieCard, width: 180 };
      return { ...sectionStyles.movieCard, width: 120 };
    };

    return (
      <View style={sectionStyles.sectionContainer}>
        <View style={sectionStyles.sectionHeader}>
          <Text style={sectionStyles.sectionTitle}>{title}</Text>
          <TouchableOpacity onPress={() => router.push({pathname: "/home/all_movies",params: { title }})}>
            <Text style={sectionStyles.seeMoreText}>See More</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity style={{ ...getItemStyle(item), marginRight: 15 }}>
              <Image source={item.image} style={sectionStyles.posterImage} resizeMode="cover" />
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.profileContainer}>
          <Image source={avatar} style={styles.avatar} />
          <View>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.nameText}>Ali Alexander</Text>
          </View>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => router.push("/home/search")} style={styles.iconButton}>
            <Ionicons name="search-outline" size={24} color="#B4C1D4" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/home/notification")} style={styles.iconButton}>
            <Ionicons name="notifications-outline" size={24} color="#B4C1D4" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {renderSection("Recently Played", RECENTLY_PLAYED_DATA)}
        {renderSection("Trending Movies", TRENDING_MOVIES_DATA, true)}
        {renderSection("Top TV Series", TOP_TV_SERIES_DATA)}
      </ScrollView>

      <BottomNavbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#112F5A',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    paddingTop: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#08B451',
  },
  welcomeText: {
    fontSize: 14,
    color: '#B4C1D4',
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 15,
  },
});

const sectionStyles = StyleSheet.create({
  sectionContainer: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  seeMoreText: {
    fontSize: 14,
    color: '#08B451',
  },
  movieCard: {
    height: 180,
    borderRadius: 10,
    overflow: 'hidden',
  },
  trendingMovieCard: {
    height: 250,
    borderRadius: 10,
    overflow: 'hidden',
  },
  recentlyPlayedCard: {
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  posterImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default Home;
