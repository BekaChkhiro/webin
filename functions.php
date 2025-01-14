<?php

function boilerplate_load_assets() {
  // Dequeue unnecessary WordPress styles and scripts
  wp_dequeue_style('wp-block-library');
  
  // Enqueue our main JS with defer
  wp_enqueue_script('ourmainjs', get_theme_file_uri('/build/index.js'), array('wp-element'), '1.0', true);
  
  // Enqueue our main CSS
  wp_enqueue_style('ourmaincss', get_theme_file_uri('/build/index.css'));
}

add_action('wp_enqueue_scripts', 'boilerplate_load_assets');

// Add preload tags for critical resources
function add_preload_tags() {
  ?>
  <link rel="preload" href="<?php echo get_theme_file_uri('/build/index.css'); ?>" as="style">
  <link rel="preload" href="<?php echo get_theme_file_uri('/build/index.js'); ?>" as="script">
  <?php
}
add_action('wp_head', 'add_preload_tags', 1);

// Add browser caching headers
function add_caching_headers() {
  if (!is_admin()) {
    header('Cache-Control: public, max-age=31536000');
    header('Expires: ' . gmdate('D, d M Y H:i:s', time() + 31536000) . ' GMT');
  }
}
add_action('send_headers', 'add_caching_headers');

function boilerplate_add_support() {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
}

add_action('after_setup_theme', 'boilerplate_add_support');