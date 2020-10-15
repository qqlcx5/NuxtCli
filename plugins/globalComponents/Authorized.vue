<script>
import { check } from '../../utils/auth'
export default {
  name: 'Authorized',
  functional: true,
  props: {
    authority: {
      type: Array,
      required: true,
    },
  },
  render(h, context) {
    const { props, scopedSlots } = context
    console.log('propspropspropsprops');
    console.log(props);
    return check(props.authority) ? scopedSlots.default() : null
  },
}
</script>
