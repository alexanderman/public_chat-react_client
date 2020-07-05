import { Avatar } from "@material-ui/core";

const AVATARS = [
    'https://s3.amazonaws.com/spectrumnews-web-assets/wp-content/uploads/2018/11/13154625/20181112-SHANK3monkey-844.jpg',
    'https://ichef.bbci.co.uk/news/1024/branded_news/E9DF/production/_96317895_gettyimages-164067218.jpg',
    'https://cdn.mos.cms.futurecdn.net/bQgcMwEnyhFu6ASuUFrtsn.jpg',
    'https://frontiersinblog.files.wordpress.com/2018/06/frontiers-in-ecology-evolution-ape-human-bonobo-muscles.jpg',
    'https://static01.nyt.com/images/2015/09/23/multimedia/science-take-apes/science-take-apes-superJumbo-v3.jpg',
    'https://www.pametnica.rs/wp-content/uploads/2015/08/Babun-1024x684.jpg',
    'https://lh5.ggpht.com/-_6PJW4fB1lk/Tn8YuyO-XCI/AAAAAAAAAlE/RH3TnXKYqbs/s72-c/Babun%252520Memiliki%252520Kemampuan%252520Adaptif%252520Untuk%252520Beranalogi%252520Seperti%252520Manusia%25255B5%25255D.jpg?imgmax=800',
    'https://www.sanovnik.org/wp-content/uploads/2015/04/babun-540x380.jpg',
    'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg',
    'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/dog_breed_health_issues_slideshow/1800x1200_dog_breed_health_issues_slideshow.jpg'
];

function getRandomAvatar() {
    return AVATARS[Math.floor(Math.random() * AVATARS.length)];
}

export default getRandomAvatar;