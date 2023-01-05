gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: '.join-fbs__pic',
    once: true,
    end: 'top bottom',
    onUpdate: fieldAnimation
  });

function fieldAnimation() {
    gsap.timeline({}).to('.join-fbs__arrow path', {animation: 'active-arrow forwards 4s ease-out 1'})
                    .to('.join-fbs__player-1', {opacity: 1}, '<0')
                    .to('.join-fbs__player-2', {opacity: 1}, '<2')
                    .to('.join-fbs__player-1', {opacity: 0}, '<0')
                    .to('.join-fbs__player-3', {opacity: 1}, '<2')
                    .to('.join-fbs__player-2', {opacity: 0}, '<0')
                    .to('.join-fbs__arrow-tip', {opacity: 1}, 'join-fbs__arrow path+=0.3')
                    .to('.join-fbs__player-3', {opacity: 0}, '<0')
                    .to('.join-fbs__field', {opacity: 0}, '<1')
                    .to('.join-fbs__graph', {opacity: 1}, '<0')
                    .to('.join-fbs__tooltip', {opacity: 1}, '<0')
                    .addLabel('startGraphLine', '-=0.5')
                    .to('.join-fbs__graph-line svg:nth-of-type(1)', {animation: 'active-line forwards 0.1s linear 1'}, 'startGraphLine+=0.3')
                    .to('.join-fbs__graph-line svg:nth-of-type(2)', {animation: 'active-line forwards 0.5s linear 1'}, 'startGraphLine+=0.4')
                    .to('.join-fbs__graph-line svg:nth-of-type(3)', {animation: 'active-line forwards 0.5s linear 1'}, 'startGraphLine+=0.1')
                    .to('.join-fbs__graph-line svg:nth-of-type(4)', {animation: 'active-line forwards 0.5s linear 1'}, 'startGraphLine+=0.3')
                    .to('.join-fbs__graph-line svg:nth-of-type(5)', {animation: 'active-line forwards 0.5s linear 1'}, 'startGraphLine+=0.2')
                    .to('.join-fbs__graph-line svg:nth-of-type(6)', {animation: 'active-line forwards 0.5s linear 1'}, 'startGraphLine+=0.1')
                    .to('.join-fbs__graph-line svg:nth-of-type(7)', {animation: 'active-line forwards 0.5s linear 1'}, 'startGraphLine+=0.1')
                    .to('.join-fbs__graph-line svg:nth-of-type(8)', {animation: 'active-line forwards 0.5s linear 1'}, 'startGraphLine+=0.4')
                    .to('.join-fbs__graph-line svg:nth-of-type(9)', {animation: 'active-line forwards 0.5s linear 1'}, 'startGraphLine+=0.4')
                    .to('.join-fbs__graph-line svg:nth-of-type(10)', {animation: 'active-line forwards 0.5s linear 1'}, 'startGraphLine+=0.3')
                    .to('.join-fbs__graph-line svg:nth-of-type(11)', {animation: 'active-line forwards 0.5s linear 1'}, 'startGraphLine+=0.2')
}