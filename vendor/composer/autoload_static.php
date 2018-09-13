<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit08b65c9af3a227c86e2b58d76bfbaab5
{
    public static $prefixLengthsPsr4 = array (
        'W' => 
        array (
            'Wikimedia\\Composer\\' => 19,
        ),
        'D' => 
        array (
            'Drupal\\Core\\Composer\\' => 21,
        ),
        'C' => 
        array (
            'Composer\\Installers\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Wikimedia\\Composer\\' => 
        array (
            0 => __DIR__ . '/..' . '/wikimedia/composer-merge-plugin/src',
        ),
        'Drupal\\Core\\Composer\\' => 
        array (
            0 => __DIR__ . '/..' . '/drupal/drupal/core/lib/Drupal/Core/Composer',
        ),
        'Composer\\Installers\\' => 
        array (
            0 => __DIR__ . '/..' . '/composer/installers/src/Composer/Installers',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit08b65c9af3a227c86e2b58d76bfbaab5::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit08b65c9af3a227c86e2b58d76bfbaab5::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
