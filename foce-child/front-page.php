<?php

get_header();
?>

    <main id="primary" class="site-main">
    
        <section id="banner" class="banner">
            <!-- fallback image display -->
            <div id="banner__fallback-title" class="banner__fallback-title">
                <img src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?> 
                " alt="logo Fleurs d'oranger & chats errants"/>
            </div>
            <div id="banner__fallback-title-back" class="banner__fallback-title-back">    
                <img src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?> 
                " alt="logo Fleurs d'oranger & chats errants"/>
            </div>
            <div id="banner__fallback-image" class="banner__fallback-image">    
                <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/banner.png"/>
            </div>
            <!-- banner video & title -->

            <div id="wrapper__title" class="wrapper__title">
                <div id="banner__title" class="banner__title">
                    <img id="banner__title-image" class="banner__title-image" src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?> 
                    " alt="logo Fleurs d'oranger & chats errants"/>
                </div>
            </div>

            <div id="wrapper__video" class="wrapper__video">
                <div id="banner__header-video" class="banner__header-video">
                    <video autoplay muted loop>
                        <source src="http://koukaki.local/wp-content/uploads/2026/03/StudioKoukaki-videoheadersansson1.mp4" type="video/mp4">
                    </video>
                </div>
            </div>

        </section>    
        <section id="story" class="story">
            
            <article id="story__story" class="story__story">
                <div id="story__title" class="story__title">
                    <h2>L'histoire</h2>
                </div>
                <div id="story__article" class="story__article">
                    <p><?php echo get_theme_mod('story'); ?></p>
                </div>
            </article>

            <?php
            $args = array(
                'post_type' => 'characters',
                'posts_per_page' => -1,
                'meta_key'  => '_main_char_field',
                'orderby'   => 'meta_value_num',

            );
            $characters_query = new WP_Query($args);
            ?>
            <article id="characters" class="characters">
                <div class="main-character">
                    <h3>Les personnages</h3> 
                </div>
                <div class="other-characters">
                    <?php get_template_part( 'assets/parts/characters' ); ?>  
                </div>
            </article>
            
            <article id="place" class="place">
                <div>
                    <div id="swiper__cloud" class="swiper__cloud">
                        <div id="place__cloud" class="place__cloud">
                            <img id="place__big-cloud" class="place__big-cloud" src="http://koukaki.local/wp-content/uploads/2026/03/big_cloud.png" 
                            alt="grand nuage parallax" />
                            <img id="place__little-cloud" class="place__little-cloud" src="http://koukaki.local/wp-content/uploads/2026/03/little_cloud.png" 
                            alt="grand nuage parallax" />
                        </div>
                    </div>
                    <h3>Le Lieu</h3>
                    <p><?php echo get_theme_mod('place'); ?></p>
                </div>

            </article>
        </section>




        <section id="studio" class="studio">
            <h2>Studio Koukaki</h2>
            <div>
                <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
                <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
            </div>
            <?php get_template_part( 'assets/parts/oscars' ); ?>
        </section>
    </main><!-- #main -->

    <!-- Custom SwiperJs -->
     <script src="/assets/js/swiper.js"></script>
<?php
get_footer();