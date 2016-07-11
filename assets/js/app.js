var app = new Vue({
    el: 'body',

    components: {
        slide: {
            template: '#slide-template',

            data: function () {
                return {
                    index: null,
                };
            },
        },
    },

    data: {
        current: 0,
        slideQty: 0,
    },

    methods: {
        next: function() {
            if (this.current < this.slideQty) this.current++;
        },

        prev: function() {
            if(this.current > 1) this.current--;
        },

        getProgress: function() {
            return ((this.current * 100) / this.slideQty);
        },
    },

    ready: function() {
        this.current = 1;
        this.slideQty = this.$children.length;

        for (var x in this.$el.children) {
            var el = this.$el.children[x];

            if (!el.__vue__) continue;

            el.__vue__.index = x;
        }
    },
});
