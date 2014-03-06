module.exports = function(grunt) {

    'use strict';

    // grunt.loadNpmTasks('grunt-html-build');
    var version = "0.0.2";

    grunt.config('htmlbuild', {

        // PREVIEW SERVER TEMPLATES
        // *

        homepage: {
            src: 'app/homepage.html',
            dest: 'preview/homepage.html',
            options: {
                beautify: false,
                relative: true, // Make generated path relative to dest path. If this arguments is specified with false value, generated paths will be written as you configure in your Gruntfile.
                replace: false, // True to replace src file instead of creating a new file.
                logOptions: true, // Log an alert in console if some optional tags are not rendered
                data: {
                    version: version,
                    template: 'Default Homepage Template',
                    title: 'Metropolitan State University of Denver'
                },
                sections: {
                    templates: {
                        first: 'app/templates/first.html',
                        second: 'app/templates/second.html'
                    },
                    views: {
                        homepageThreeFeatures: 'app/views/homepageThreeFeatures.html',
                        newsAndCalendar: 'app/views/newsAndCalendar.html',
                        weather: 'app/views/weather.html'
                    },
                    layout: {
                        header: 'app/layouts/header.html',
                        footer: 'app/layouts/footer.html'
                    }
                }
            }
        },

        onecol: {
            src: 'app/onecol.html',
            dest: 'preview/onecol.html',
            options: {
                beautify: false,
                relative: true,
                replace: false,
                logOptions: true,
                data: {
                    version: version,
                    template: 'Default one column template',
                    title: '<t4 type=\'title\' /> | <t4 type=\'navigation\' id=\'524\' /> | MSU Denver'
                },
                sections: {
                    templates: {
                        first: 'app/templates/first.html',
                        second_without_jquery: 'app/templates/second_without_jquery.html'
                    },
                    views: {
                        twocol_content: 'app/views/sidemenu.html',
                        sidemenu: 'app/views/sidemenu.html',
                        siteheader: 'app/views/siteheader.html',
                        sample_content: 'app/views/twocol/sample_content_one.html',
                        multicolumn_dependencies: 'app/views/multicolumn_dependencies.html',
                        hero: 'app/views/hero.html',
                        icons: 'app/views/icons.html',
                    },
                    layout: {
                        header: 'app/layouts/header_without_bluebar_nav.html',
                        footer: 'app/layouts/footer.html'
                    }
                }
            }
        },

        twocol: {
            src: 'app/twocol.html',
            dest: 'preview/twocol.html',
            options: {
                beautify: false,
                relative: true,
                replace: false,
                logOptions: true,
                data: {
                    version: version,
                    template: 'Default two column template',
                    title: '<t4 type=\'title\' /> | <t4 type=\'navigation\' id=\'524\' /> | MSU Denver'
                },
                sections: {
                    templates: {
                        first: 'app/templates/first.html',
                        second_without_jquery: 'app/templates/second_without_jquery.html'
                    },
                    views: {
                        twocol_content: 'app/views/sidemenu.html',
                        sidemenu: 'app/views/sidemenu.html',
                        siteheader: 'app/views/siteheader.html',
                        sample_content: 'app/views/twocol/sample_content_one.html',
                        multicolumn_dependencies: 'app/views/multicolumn_dependencies.html',
                        hero: 'app/views/hero.html',
                        icons: 'app/views/icons.html',
                    },
                    layout: {
                        header: 'app/layouts/header_without_bluebar_nav.html',
                        footer: 'app/layouts/footer.html'
                    }
                }
            }
        },

        threecol: {
            src: 'app/threecol.html',
            dest: 'preview/threecol.html',
            options: {
                beautify: false,
                relative: true,
                replace: false,
                logOptions: true,
                data: {
                    version: version,
                    template: 'Default three column template',
                    title: '<t4 type=\'title\' /> | <t4 type=\'navigation\' id=\'524\' /> | MSU Denver'
                },
                sections: {
                    templates: {
                        first: 'app/templates/first.html',
                        second_without_jquery: 'app/templates/second_without_jquery.html'
                    },
                    views: {
                        twocol_content: 'app/views/sidemenu.html',
                        sidemenu: 'app/views/sidemenu.html',
                        siteheader: 'app/views/siteheader.html',
                        sample_content: 'app/views/twocol/sample_content_one.html',
                        multicolumn_dependencies: 'app/views/multicolumn_dependencies.html',
                        hero: 'app/views/hero.html',
                        icons: 'app/views/icons.html',
                        threecol_content: 'app/views/threecol/threecol_content.html',
                    },
                    layout: {
                        header: 'app/layouts/header_without_bluebar_nav.html',
                        footer: 'app/layouts/footer.html'
                    }
                }
            }
        },

        // PRODUCTION SITEMANAGER TEMPLATES
        // * (no views no layouts; will contain t4 tags)

        prod_homepage: {
            src: 'preview/homepage.html',
            dest: 'prod/homepage.html',
            options: {
                beautify: false,
                // prefix: '/media/assets/', //some-cdn
                relative: true,
                data: {
                    version: version,
                    template: 'Default Homepage Template',
                    title: '<t4 type=\'title\' /> | <t4 type=\'navigation\' id=\'524\' /> | MSU Denver'
                },
                sections: {
                    templates: {
                        first: 'app/templates/first.html',
                        second_without_jquery: 'app/templates/second_without_jquery.html'
                    },
                    views: {
                        twocol_content: 'app/views/sidemenu.html',
                        sidemenu: 'app/views/sidemenu.html',
                        siteheader: 'app/views/siteheader.html',
                        sample_content: 'app/views/twocol/sample_content_one.html',
                        icons: 'app/views/icons.html',
                        logo: 'app/views/logo.html',
                        testimonial: 'app/views/testimonial.html',
                        social_links: 'app/views/social_links.html'
                    },
                    layout: {
                        header: 'app/layouts/header_without_bluebar_nav.html',
                        footer: 'app/layouts/footer.html'
                    }
                }
            }
        },

      prod_onecol: {
            src: 'preview/onecol.html',
            dest: 'prod/onecol.html',
            options: {
                beautify: false,
                // prefix: '/media/assets/', //some-cdn
                relative: true,
                data: {
                    version: version,
                    template: 'Default two column template',
                    title: '<t4 type=\'title\' /> | <t4 type=\'navigation\' id=\'524\' /> | MSU Denver'
                },
                sections: {
                    templates: {
                        first: 'app/templates/first.html',
                        second_without_jquery: 'app/templates/second_without_jquery.html'
                    },
                    views: {
                        twocol_content: 'app/views/sidemenu.html',
                        sidemenu: 'app/views/sidemenu.html',
                        siteheader: 'app/views/siteheader.html',
                        sample_content: 'app/views/twocol/sample_content_one.html',
                        icons: 'app/views/icons.html',
                        logo: 'app/views/logo.html',
                        testimonial: 'app/views/testimonial.html',
                        social_links: 'app/views/social_links.html'
                    },
                    layout: {
                        header: 'app/layouts/header_without_bluebar_nav.html',
                        footer: 'app/layouts/footer.html'
                    }
                }
            }
        },

        prod_twocol: {
            src: 'preview/twocol.html',
            dest: 'prod/twocol.html',
            options: {
                beautify: false,
                // prefix: '/media/assets/', //some-cdn
                relative: true,
                data: {
                    version: version,
                    template: 'Default two column template',
                    title: '<t4 type=\'title\' /> | <t4 type=\'navigation\' id=\'524\' /> | MSU Denver'
                },
                sections: {
                    templates: {
                        first: 'app/templates/first.html',
                        second_without_jquery: 'app/templates/second_without_jquery.html'
                    },
                    views: {
                        twocol_content: 'app/views/sidemenu.html',
                        sidemenu: 'app/views/sidemenu.html',
                        siteheader: 'app/views/siteheader.html',
                        sample_content: 'app/views/twocol/sample_content_one.html',
                        icons: 'app/views/icons.html',
                        logo: 'app/views/logo.html',
                        testimonial: 'app/views/testimonial.html',
                        social_links: 'app/views/social_links.html'
                    },
                    layout: {
                        header: 'app/layouts/header_without_bluebar_nav.html',
                        footer: 'app/layouts/footer.html'
                    }
                }
            }
        },

        prod_threecol: {
            src: 'preview/threecol.html',
            dest: 'prod/threecol.html',
            options: {
                beautify: false,
                // prefix: '/media/assets/', //some-cdn
                relative: true,
                data: {
                    version: version,
                    template: 'Default three column template',
                    title: '<t4 type=\'title\' /> | <t4 type=\'navigation\' id=\'524\' /> | MSU Denver'
                },
                sections: {
                    templates: {
                        first: 'app/templates/first.html',
                        second_without_jquery: 'app/templates/second_without_jquery.html'
                    },
                    views: {
                        twocol_content: 'app/views/sidemenu.html',
                        sidemenu: 'app/views/sidemenu.html',
                        siteheader: 'app/views/siteheader.html',
                        sample_content: 'app/views/twocol/sample_content_one.html',
                        icons: 'app/views/icons.html',
                        logo: 'app/views/logo.html',
                        testimonial: 'app/views/testimonial.html',
                        social_links: 'app/views/social_links.html',
                        threecol_content: 'app/views/threecol/threecol_content.html',
                    },
                    layout: {
                        header: 'app/layouts/header_without_bluebar_nav.html',
                        footer: 'app/layouts/footer.html'
                    }
                }
            }
        }
    });
}
