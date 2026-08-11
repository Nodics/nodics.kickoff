/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/** @module kickoffLocal/processServer/data/init/headers/editorial/defaultEditorialProcessDefinitionVersionDataHeader @description Imports immutable Editorial versions through Process. @layer project-data @owner nodics.kickoff */
module.exports = { flowSchema: { defaultEditorialProcessDefinitionVersionData: { options: { enabled: true, schemaName: 'processDefinitionVersion', operation: 'saveAll', dataFilePrefix: 'defaultEditorialProcessDefinitionVersionData', userGroups: ['adminGroup'] }, query: { code: '$code' } } } };
