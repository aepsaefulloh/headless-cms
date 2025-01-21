'use strict';

/**
 * project controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::project.project');
module.exports = createCoreController('api::project.project',
    ({ strapi }) => ({

        async find(ctx) {
            const entities = await strapi.db.query('api::project.project').findMany({
                populate: ["image"]
            });

            const sanitizedEntities = await this.sanitizeOutput(entities, ctx);
            return this.transformResponse(sanitizedEntities);
        }
    })
);