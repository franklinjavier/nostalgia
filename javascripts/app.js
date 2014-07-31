window.onload = function() {

    var demo = new Vue({
        el: '#nostalgia',
        data: {
            videos: videos
        },
        created: function () {
            this.$watch('year', function () {
                this.fetchData();
            });
        },
        methods: {
            fetchData: function () {    
                
                if ( ! this.year || this.year === 'undefined' ) {
                    this.display = 'hide';
                    return false;
                }

                var year = this.year,
                    items = this.$data.videos[ year ],
                    i = 0,
                    len = items.length,
                    ids = '';
            
                for ( ; i < len; i++ ) {
                    ids += items[ i ].id + 
                        (i === len-1 ? '' : ',');
                }
            
                this.id = ids;
                this.display = 'show';
            }
        }
    })

};

