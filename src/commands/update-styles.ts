import Command from './command';
import NodeManager from '../manager/node-manager';
import ReferencesManager from '../manager/references-manager';

export default class UpdateStylesCommand extends Command {
  NAME = 'update-styles';

  execute() {
    const references = new ReferencesManager();
    references.each((node) => {
      const manager = new NodeManager(node);
      manager.updateStyles();
    });
  }
}
