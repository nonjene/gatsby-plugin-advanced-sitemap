import assignin from 'lodash.assignin'
import BaseSiteMapGenerator from './BaseSiteMapGenerator'

export default class SiteMapGenerator extends BaseSiteMapGenerator {
    constructor(opts, type) {
        super()

        this.name = type || `pages`

        assignin(this, opts)
    }
}
